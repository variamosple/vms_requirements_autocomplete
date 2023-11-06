var formatReq=require ("./autocompleteServiceV2");
async function format(req) {
    let project = req.body.data.project;
    let modelId = req.body.data.modelSelectedId;
   // console.log(modelId)
    var domain ='';
    let model = null;
    for (let p = 0; p < project.productLines.length; p++) {
        const productLine = project.productLines[p];
        for (let m = 0; m < productLine.domainEngineering.models.length; m++) {
            let plmodel = productLine.domainEngineering.models[m];
            //console.log(plmodel.id)
            if (plmodel.id == modelId) {
                model = plmodel;
                m = productLine.domainEngineering.models.length;
                p = project.productLines.length;
                domain= productLine.domain;
                console.log(domain)
            }
        }
    }
    

    if (!model) {
        return project;
    }

    for (let i = 0; i < req.body.data.selectedElementsIds.length; i++) {
        let selectedElementId = req.body.data.selectedElementsIds[i];
        for (let m = 0; m < model.elements.length; m++) {
            let element = model.elements[m];
           // console.log(selectedElementId)
            if (element.id == selectedElementId) {
                element.properties.find(prop => prop.name === "Description").value = (await formatReq.endRequirement(({"body":{"input":element.properties.find(prop => prop.name === "Description").value,"domain":domain}}))).input;
            }
        }
    }
 
    return project;
}
module.exports = { format };