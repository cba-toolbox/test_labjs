// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "messageHandlers": {
    "epilogue": function anonymous(
) {
var resultJson = study.options.datastore.exportJson();
jatos.submitResultData(resultJson, jatos.startNextComponent);
}
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "調査にご参加いただき，誠にありがとうございます。",
          "content": "以下では，あなたの情報についてお尋ねします。"
        },
        {
          "required": true,
          "type": "input",
          "label": "あなたの年齢について教えて下さい。",
          "attributes": {
            "type": "number",
            "min": "0",
            "max": "120"
          },
          "name": "age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "あなたの性別について教えて下さい。",
          "options": [
            {
              "label": "男性",
              "coding": "male"
            },
            {
              "label": "女性",
              "coding": "female"
            },
            {
              "label": "その他",
              "coding": "other"
            },
            {
              "label": "回答したくない",
              "coding": "DR"
            }
          ],
          "shuffle": true,
          "name": "sex"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "CBATは便利だと思う。",
              "coding": "q1"
            },
            {
              "label": "JATOSで実験管理ができると便利と思う。",
              "coding": "q2"
            }
          ],
          "width": "5",
          "anchors": [
            "そう思わない",
            "どちらかと言えばそう思わない",
            "どちらでもない",
            "どちらかと言えばそう思う",
            "そう思う"
          ],
          "shuffle": true,
          "name": "likert",
          "label": "以下の質問に関して，どのくらいそう思うのか，１「そう思わない」から５「そう思う」の５段階で回答をしてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    }
  ]
})

// Let's go!
jatos.onLoad(() => study.run())