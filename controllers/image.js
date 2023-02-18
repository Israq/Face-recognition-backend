const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key 5e66c11d847948d1b9c5dd90e6a2b4f2");

// const Clarifai = require('Clarifai');
// const app = new Clarifai.App({
//     apiKey: '5e66c11d847948d1b9c5dd90e6a2b4f2'
//    });
const handleApiCall = (req, res) => {
   stub.PostModelOutputs(
        {
            // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
            model_id: 'a403429f2ddf4b49b307e318f00e528b',
            version_id: '34ce21a40cc24b6b96ffee54aabff139',
            inputs: [{data: {image: {url: req.body.input}}}]
        },
        metadata,
        (err, response) => {
            if (err) {
                console.log("Error: " + err);
                return;
            }

            if (response.status.code !== 10000) {
                console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
                return;
            }

            console.log("Predicted concepts, with confidence values:")
            for (const c of response.outputs[0].data.concepts) {
                console.log(c.name + ": " + c.value);
            }
            res.json(response)
            }
    );
}


//    app.models
//    .predict(
//      {
//        id: 'face-detection',
//        name: 'face-detection',
//        version: '6dc7e46bc9124c5c8824be4822abe105',
//        type: 'visual-detector',
//      }, req.body.input)
//      .then(data => {
//         res.json(data);
//      })
//      .catch(err => res.status(400).json('Unable to Work with API'))


const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0].entries);
        })
        .catch(err => res.status(400).json('Unable to Get Entries'))
    }

    module.exports = {
        handleImage,
        handleApiCall
    }