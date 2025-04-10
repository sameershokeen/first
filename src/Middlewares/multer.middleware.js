import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    //naming will be after some time becasue at a time multiple file has same name
  },
});

export const upload = multer({ storage });
