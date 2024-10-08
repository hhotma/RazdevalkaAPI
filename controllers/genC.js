export const generate = async (req, res, next) => {
    try {
        console.log(req.body);
        console.log(req.file);

        // const formData = new FormData();
        // formData.append('cloth', 'naked');

        // const url = 'https://public-api.clothoff.net/undress';
        // const options = { method: 'POST', headers: { accept: 'application/json' } };

        // options.body = {
        //     "post_gen": req.body.post_gen
        // };

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.error('error:' + err));

        res.status(200).send("OK");
    } catch (error) {
        next(error);
    }
}