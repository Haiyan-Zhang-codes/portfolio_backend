import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
    en: { type: String, required: true },
    fr: { type: String, required: true },
});

const WorkExperienceSchema = new Schema({
    eCommerce: LanguageSchema,
    developer: LanguageSchema,
    dataAnalysis: LanguageSchema
})

const ProjectSchema = new Schema({
    webProject: LanguageSchema,
    dataAnalysis: LanguageSchema
})

const PersonalInfoSchema = new Schema({
  yourName: LanguageSchema,
  technicalSkills: LanguageSchema,
  softSkills: LanguageSchema,
  education: LanguageSchema,
  workExperience: WorkExperienceSchema,
  whoYouAre: LanguageSchema,
  strength:LanguageSchema,
  weakness: LanguageSchema,
  project: ProjectSchema,
});

const PersonalInfo = mongoose.model('PersonalInfo', PersonalInfoSchema)
export default PersonalInfo;