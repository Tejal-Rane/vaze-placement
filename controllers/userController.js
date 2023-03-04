const profileModel =require("../models/profileModel.js");
const placementModel =require("../models/placementModel.js");
const createProfileCtrl = async (req, res) => {
  try {
    const profile = new profileModel(req.body);
    await profile.save();
    res.status(200).json({ message: "profile created success", success: true });
  } catch (error) {
    res.status(500).json({
      message: "profile creation failed",
      success: false,
      error: error.message,
    });
  }
};
const getDrive=async(req,res)=>{
try{
  const drive=await placementModel.find({_id:req.params.id})
  res.status(200).json(drive)
}catch(error){
res.status(501).send(error)
}
};

const getAllDrives = async (req, res) => {
  try {
    const alldrives = await placementModel.find({});
    res.status(200).json(alldrives);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch all drives", error });
  }
};

const getallplacedcompanies = async (req, res) => {
  try {
    const allcompanies = await profileModel.find(
      { userId: req.params.id },
      { placedData: 1 }
    );
    res.status(200).send(allcompanies);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch placed data" });
  }
};

const getProfile = async (req, res) => {
  try {
    const getprofile = await profileModel.find({ userId: req.params.id });
    res.status(200).json(getprofile);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch placed data" });
  }
};
module.exports={createProfileCtrl,getDrive,getAllDrives,getallplacedcompanies,getProfile}