import fs from "fs";
const stringPath = "./PDFs/ThomasDoyleResume.pdf";
const filename = "ThomasDoyleResume.pdf";

export const handler = async () => {
  try {
    var encodedFile = encodeURIComponent(filename);
    var file = fs.readFileSync(stringPath, { encoding: "base64" });
    console.log("read....");
  } catch (e) {
    console.log("not Rad....");
    return {
      statusCode: 420,
      body: `oh no ${e}`
    };
  }
  return {
    statusCode: 200,
    headers: {
      "Content-type": "application/pdf",
      "Content-disposition": `attachment; filename="${encodedFile}"`
    },
    body: `${file}`,
    isBase64Encoded: true
  };
};
