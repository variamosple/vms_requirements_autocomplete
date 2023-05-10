const docx = require('docx');
const { AlignmentType, Document, Footer, Header, HeadingLevel, Packer, Paragraph, TextRun, UnderlineType, Table, TableCell, TableRow } = docx;


async function generateSyRS(req) {
  /*   let project = req.body.data.project;

    let model = project.productLines[0].domainEngineering.models[0];
    let parentRequirement = model.elements[0];

*/
console.log(req.body.data.name)
const doc = new Document({
    creator: "VariaMos",
    title: "System Requirements Specification Project:"+ req.body.data.name,
    description: "A brief example of using docx",
    styles: {
        paragraphStyles: [
            {
                id: "Title",
                name: "Title",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                
                run: {
                    size: 38,
                    bold: true,
                    italics: false,
                    color: "000000",
                    
                },
                paragraph: {
                    spacing: {
                        after: 160,
                    },
                    alignment:AlignmentType.CENTER,
                },
            },
            {
                id: "Heading1",
                name: "Heading 1",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 30,
                    bold: true,
                    italics: false,
                    color: "000000",
                },
                paragraph: {
                    spacing: {
                        after: 120,
                    },
                },
            },
            {
                id: "Heading2",
                name: "Heading 2",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 26,
                    bold: true,
                },
                paragraph: {
                    spacing: {
                        before: 240,
                        after: 120,
                    },
                },
            },
            {
                id: "Heading3",
                name: "Heading 3",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 24,
                    bold: true,
                },
                paragraph: {
                    spacing: {
                        before: 240,
                        after: 120,
                    },
                },
            },
            {
                id: "aside",
                name: "Aside",
                basedOn: "Normal",
                next: "Normal",
                run: {
                    color: "999999",
                    italics: true,
                },
                paragraph: {
                    indent: {
                        left: 720,
                    },
                    spacing: {
                        line: 276,
                    },
                },
            },
            {
                id: "wellSpaced",
                name: "Well Spaced",
                basedOn: "Normal",
                quickFormat: true,
                paragraph: {
                    spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
                },
            },
            {
                id: "ListParagraph",
                name: "List Paragraph",
                basedOn: "Normal",
                quickFormat: true,
            },
        ],
    },
    numbering: {
        config: [
            {
                reference: "my-crazy-numbering",
                levels: [
                    {
                        level: 0,
                        format: "decimal",
                        text: "%1.",
                        alignment: AlignmentType.START,
                    },
                    {
                        level: 1,
                        format: "decimal",
                        text: "%1.%2.",
                        alignment: AlignmentType.START,
                    },
                    {
                        level: 2,
                        format: "decimal",
                        text: "%1.%2.%3",
                        alignment: AlignmentType.START,
                    },
                ],
            },
        ],
    },
    sections: [{
        children: [
            new Paragraph({
                text: "System Requirements Specification",
                heading: HeadingLevel.TITLE,
                
            }),
            new Paragraph({
                text: " Project:"+ req.body.data.name,
                heading: HeadingLevel.TITLE,
                
            }),
            new Paragraph({
                text: "Introduction",
                heading: HeadingLevel.HEADING_1,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
            }),
            new Paragraph("Enter introduction here..."),
            new Paragraph({
                text: "System purpose",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph("Enter purpose here..."),
            new Paragraph({
                text: "System Scope",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph("Enter scope here..."),
            new Paragraph({
                text: "System Overview",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph("Enter system overview here..."),
            new Paragraph({
                text: " System context",
                heading: HeadingLevel.HEADING_3,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
            }),
            new Paragraph("Enter system context here..."),
            new Paragraph({
                text: "System functions",
                heading: HeadingLevel.HEADING_3,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
            }),
            new Paragraph("Enter system functions here..."),
            new Paragraph({
                text: "User characteristics ",
                heading: HeadingLevel.HEADING_3,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 2,
                },
            }),
            new Paragraph("Enter User characteristics here..."),
            new Paragraph({
                text: " Definitions",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph("Enter definitions here..."),
            new Paragraph({
                text: "References",
                heading: HeadingLevel.HEADING_1,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
            }),
            new Paragraph("Enter references here..."),
            new Paragraph({
                text: "System requirements",
                heading: HeadingLevel.HEADING_1,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
            }),
            new Paragraph({
                text: "Functional requirements",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Usability requirements",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Performance requirements",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "System interface",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "System operations",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "System modes and states ",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Physical characteristics",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Environmental conditions",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "System security",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Information management",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Policies and regulations",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "System life cycle sustainment",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Packaging, handling, shipping and transportation",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph({
                text: "Verification",
                heading: HeadingLevel.HEADING_1,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
            }),
            new Paragraph("Enter verification here..."),
            new Paragraph({
                text: "Appendices",
                heading: HeadingLevel.HEADING_1,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 0,
                },
            }),
        
            new Paragraph({
                text: "Assumptions and dependencies",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph("Enter assumptions and dependencies here..."),
            new Paragraph({
                text: "Acronyms and abbreviations",
                heading: HeadingLevel.HEADING_2,
                numbering: {
                    reference: "my-crazy-numbering",
                    level: 1,
                },
            }),
            new Paragraph("Enter acronyms and abbreviations here..."),
            
        ],
    }],
});

       // console.log(doc)
        const b64string = await Packer.toBase64String(doc);
       // console.log(b64string)
        return b64string;
        
        
   // return project;
}

async function generateSRS(req) {
    /*   let project = req.body.data.project;
  
      let model = project.productLines[0].domainEngineering.models[0];
      let parentRequirement = model.elements[0];
  
  */
  const doc = new Document({
      creator: "VariaMos",
      title: "Software Requirements Specification",
      description: "A brief example of using docx",
      styles: {
          paragraphStyles: [
              {
                  id: "Title",
                  name: "Title",
                  basedOn: "Normal",
                  next: "Normal",
                  quickFormat: true,
                  
                  run: {
                      size: 38,
                      bold: true,
                      italics: false,
                      color: "000000",
                      
                  },
                  paragraph: {
                      spacing: {
                          after: 160,
                      },
                      alignment:AlignmentType.CENTER,
                  },
              },
              {
                  id: "Heading1",
                  name: "Heading 1",
                  basedOn: "Normal",
                  next: "Normal",
                  quickFormat: true,
                  run: {
                      size: 30,
                      bold: true,
                      italics: false,
                      color: "000000",
                  },
                  paragraph: {
                      spacing: {
                          after: 120,
                      },
                  },
              },
              {
                  id: "Heading2",
                  name: "Heading 2",
                  basedOn: "Normal",
                  next: "Normal",
                  quickFormat: true,
                  run: {
                      size: 26,
                      bold: true,
                  },
                  paragraph: {
                      spacing: {
                          before: 240,
                          after: 120,
                      },
                  },
              },
              {
                  id: "Heading3",
                  name: "Heading 3",
                  basedOn: "Normal",
                  next: "Normal",
                  quickFormat: true,
                  run: {
                      size: 24,
                      bold: true,
                  },
                  paragraph: {
                      spacing: {
                          before: 240,
                          after: 120,
                      },
                  },
              },
              {
                  id: "aside",
                  name: "Aside",
                  basedOn: "Normal",
                  next: "Normal",
                  run: {
                      color: "999999",
                      italics: true,
                  },
                  paragraph: {
                      indent: {
                          left: 720,
                      },
                      spacing: {
                          line: 276,
                      },
                  },
              },
              {
                  id: "wellSpaced",
                  name: "Well Spaced",
                  basedOn: "Normal",
                  quickFormat: true,
                  paragraph: {
                      spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
                  },
              },
              {
                  id: "ListParagraph",
                  name: "List Paragraph",
                  basedOn: "Normal",
                  quickFormat: true,
              },
          ],
      },
      numbering: {
          config: [
              {
                  reference: "my-crazy-numbering",
                  levels: [
                      {
                          level: 0,
                          format: "decimal",
                          text: "%1.",
                          alignment: AlignmentType.START,
                      },
                      {
                          level: 1,
                          format: "decimal",
                          text: "%1.%2.",
                          alignment: AlignmentType.START,
                      },
                      {
                          level: 2,
                          format: "decimal",
                          text: "%1.%2.%3",
                          alignment: AlignmentType.START,
                      },
                  ],
              },
          ],
      },
      sections: [{
          children: [
              new Paragraph({
                  text: "Software Requirements Specification",
                  heading: HeadingLevel.TITLE,
                  
              }),
              new Paragraph({
                text: " Project:"+ req.body.data.name,
                heading: HeadingLevel.TITLE,
                
            }),
              new Paragraph({
                  text: "Introduction",
                  heading: HeadingLevel.HEADING_1,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 0,
                  },
              }),
              new Paragraph("Enter introduction here..."),
              new Paragraph({
                  text: "Purpose",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph("Enter purpose here..."),
              new Paragraph({
                  text: "Scope",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph("Enter scope here..."),
              new Paragraph({
                  text: "Product Overview",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph("Enter product overview here..."),
              new Paragraph({
                  text: "Product perspective",
                  heading: HeadingLevel.HEADING_3,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 2,
                  },
              }),
              new Paragraph("Enter product perspectives here..."),
              new Paragraph({
                  text: "Product functions",
                  heading: HeadingLevel.HEADING_3,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 2,
                  },
              }),
              new Paragraph("Enter product functions here..."),
              new Paragraph({
                  text: "User characteristics ",
                  heading: HeadingLevel.HEADING_3,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 2,
                  },
              }),
              new Paragraph("Enter User characteristics here..."),
              new Paragraph({
                  text: " Limitations",
                  heading: HeadingLevel.HEADING_3,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 2,
                  },
              }),
              new Paragraph("Enter limitations here..."),
              new Paragraph({
                  text: " Definitions",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph("Enter definitions here..."),
              new Paragraph({
                  text: "References",
                  heading: HeadingLevel.HEADING_1,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 0,
                  },
              }),
              new Paragraph("Enter references here..."),
              new Paragraph({
                  text: "Specific requirements",
                  heading: HeadingLevel.HEADING_1,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 0,
                  },
              }),
              new Paragraph({
                  text: "External interfaces",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Functions",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Usability Requirements ",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Performance requirements",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Logical database requirements",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Design constraints",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Software system attributes",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Supporting information",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph({
                  text: "Verification",
                  heading: HeadingLevel.HEADING_1,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 0,
                  },
              }),
              new Paragraph("Enter verification here..."),
              new Paragraph({
                  text: "Appendices",
                  heading: HeadingLevel.HEADING_1,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 0,
                  },
              }),
          
              new Paragraph({
                  text: "Assumptions and dependencies",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph("Enter assumptions and dependencies here..."),
              new Paragraph({
                  text: "Acronyms and abbreviations",
                  heading: HeadingLevel.HEADING_2,
                  numbering: {
                      reference: "my-crazy-numbering",
                      level: 1,
                  },
              }),
              new Paragraph("Enter acronyms and abbreviations here..."),
              
          ],
      }],
  });
  
         // console.log(doc)
          const b64string = await Packer.toBase64String(doc);
         // console.log(b64string)
          return b64string;
          
          
     // return project;
  }


//export methods
module.exports = { generateSyRS , generateSRS};