var axios = require('axios');
const ip = "http://193.52.45.42:8585/";

var securityCriteria = [];
var securityMechanism = [];
var ensuresCriteria=[];
var isAppliedByCriteria=[];
var precedesCriteria=[];
var providesCriteria=[];
var testsForCriteria=[];
var conservesCriteria=[];
var contributesToCriteria=[];
var revokesCriteria=[];
var additionalReq=[];

//Get all security criteria in the ontologu
const getAllCriteria = async () => {

    try {
        var res = await axios.get(ip + 'criteria')
        //console.log(res);
        securityCriteria = res.data;

        //.then((response)=>{

        //securityCriteria=response.data;
        //})
        //.catch(function (error) {
        //console.log(error.toJSON());
        //});
    }
    catch (e) {
        console.log(e)
    }

}

//Get all additional criteria
const getCriteria = async (rel,criterion) => {

    try {
        var res = await axios.get(ip + 'criteria/'+rel+'/'+criterion)
        //console.log(res);
        if(rel=='ensures')
        ensuresCriteria = res.data;
        if(rel=='isAppliedBy')
        isAppliedByCriteria=res.data;
        if(rel=='precedes')
        precedesCriteria=res.data;
        if(rel=='provides')
        providesCriteria=res.data;
        if(rel=='testsFor')
        testsForCriteria=res.data;
        if(rel=='conserves')
        conservesCriteria=res.data;
        if(rel=='contributesTo')
        contributesToCriteria=res.data;
        if(rel=='revokes')
        revokesCriteria=res.data;

        //.then((response)=>{

        //securityCriteria=response.data;
        //})
        //.catch(function (error) {
        //console.log(error.toJSON());
        //});
    }
    catch (e) {
        console.log(e)
    }

}

async function getCriteriaMechanisms(criterion) {

    try {
        var res = await axios.get(ip + 'criteria/' + criterion + '/mechanisms')
        //console.log(res);
        securityMechanism = res.data;

        //.then((response)=>{

        //securityCriteria=response.data;
        //})
        //.catch(function (error) {
        //console.log(error.toJSON());
        //});
    }
    catch (e) {
        console.log(e)
    }

}
function elementInSentence(obj, sentence) {
    var str = "";
    Object.keys(obj).some(element => {
        //console.log(element);
        if (sentence.match(element + " ")) { console.log(element); str = element; }
    })
    return str;
}
function ObjectInSentence(obj, sentence) {
    var str = "";
    Object.keys(obj).some(element => {
        //console.log(element);
        if (sentence.match("of " + element + " ")) { console.log(element); str = element; }
    })
    return str;
}
//Add requirement to the json string
function addReq(arr,priority,str0,str1){
    arr.forEach(element => {
        additionalReq.push({'criteria':element,'priority':priority,'requirement':str0+element+str1})
        
    });
}


async function additionalRequirementsSuggest(req) {
    
        additionalReq=[];
        if(securityCriteria.length==0)
        await getAllCriteria();
        console.log(req.body.input)
        //res.setHeader('Content-Type', 'application/json');
        
        var sentence = req.body.input.trim();
        console.log(sentence);
        console.log(securityCriteria);
        
        var sc;
        securityCriteria.some(element => {
            if (sentence.match(element)) sc=element;
        })
        console.log(sc);
        var str1=req.body.input.trim().split("by");
        var words = str1[0].trim().split(sc);
        await getCriteria('isAppliedBy',sc);
        console.log(isAppliedByCriteria)
        addReq(isAppliedByCriteria,"high",words[0],words[1]);
        await getCriteria('ensures',sc);
        console.log(ensuresCriteria);
        addReq(ensuresCriteria,"high",words[0],words[1]);
        await getCriteria('precedes',sc);
        console.log(precedesCriteria);
        addReq(precedesCriteria,"high",words[0],words[1]);
        await getCriteria('provides',sc);
        console.log(providesCriteria);
        addReq(providesCriteria,"medium",words[0],words[1]);
        await getCriteria('testsFor',sc);
        console.log(testsForCriteria);
        addReq(testsForCriteria,"medium",words[0],words[1]);
        await getCriteria('conserves',sc);
        console.log(conservesCriteria);
        addReq(conservesCriteria,"medium",words[0],words[1]);
        await getCriteria('contributesTo',sc);
        console.log(contributesToCriteria);
        addReq(contributesToCriteria,"low",words[0],words[1]);
        await getCriteria('revokes',sc);
        console.log(revokesCriteria);
        addReq(revokesCriteria,"low",words[0],words[1]);
        
        
       

        let data = { "input": sentence, "additionalReq":additionalReq };

        return data;

}
module.exports = { additionalRequirementsSuggest};
 
