import { Schema, model, models } from "mongoose";

const teamSchema = new Schema({
    teamName:       { type: String },
    teamCode:       { type: String },
    teamLead:       { type: String },
    members:        { type: [String], default: [] },
    prologueOne:    { type: Boolean },
    prologueTwo:    { type: Boolean },
    cluesPage:      { type: Boolean },
    success:        { type: Boolean },
    startTime:      { type: String },
    submitTime:     { type: String },
    submissions:    { type: Array },
    playerName:     { type: Boolean },
})

const Team = models.Team || model('Team', teamSchema, 'enigmateams')

export default Team