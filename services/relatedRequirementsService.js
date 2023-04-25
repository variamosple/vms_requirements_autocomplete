async function suggest(req) {
    let project = req.body.data.project;

    let model = project.productLines[0].domainEngineering.models[0];
    let parentRequirement = model.elements[0];

    let x = parentRequirement.x; //position x on the diagram
    let y = parentRequirement.y; //position x on the diagram
    let w = parentRequirement.width; //width on the diagram
    let h = parentRequirement.height; //height on the diagram
    let dy = h + 50;
    let dx = - (w + 50);

    for (let i = 1; i <= 3; i++) {
        let relatedRequirement = createRelatedRequirement(parentRequirement, i);
        relatedRequirement.x += dx;
        relatedRequirement.y += dy;
        model.elements.push(relatedRequirement); 
        let relationship=createRelationship(parentRequirement, relatedRequirement);
        model.relationships.push(relationship);
 
        dx += w + 50;
    }

    return project;
}

function createRelatedRequirement(parentRequirement, index) {
    let json = JSON.stringify(parentRequirement);
    let relatedRequirement = JSON.parse(json);
    relatedRequirement.id = generateUUID();
    relatedRequirement.name = "Related requirement " + index;
    relatedRequirement.properties[0].value=parentRequirement.properties[0].value + "_" + index;
    relatedRequirement.properties[2].value="The system must ... " + index;

    return relatedRequirement;
}

function createRelationship(parentRequirement, relatedRequirement) {
    let relationship={
        id: generateUUID(),
        name:"-",
        type:"SecurityRequirement_SecurityRequirement",
        sourceId:relatedRequirement.id,
        targetId:parentRequirement.id,
        min:0,
        max:99999,
        points:[],
        properties:[] 
    }
    return relationship;
}



function generateUUID() {
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}



//export methods
module.exports = { suggest };