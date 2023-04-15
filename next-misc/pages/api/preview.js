const Handler = (req,res) => {
    res.setPreviewData({user:'Sayak'});
    // res.end("Preview Mode enabled.");
    res.redirect(req.query.redirect);
};

export default Handler;