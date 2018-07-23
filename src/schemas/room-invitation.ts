export interface RoomInvitationPayload {
  id               : string,
  inviterId        : string,
  roomName         : string,
  roomMemberCount  : number,
  roomMemberIdList : string[],   // Friends' Contact Id List of the Room
  timestamp        : number,     // Unix Timestamp, in seconds
}
