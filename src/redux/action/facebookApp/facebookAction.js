import { ADD_COMMENT } from '../../../ulti/setting';

export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment: {...userComment, avatar: `https://i.pravatar.cc/?u=${userComment.username}`}
    }
}