export const Handler = async(req,res) => {
    const params = req.query.params;
    console.log(params);
    res.status(200).json(params);
};

export default Handler;