import profileReducer, { addNewPost, deletePost } from "./profile-reducer";

let state = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 6,
      avatar: "/avatar_icon.svg",
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 23,
      avatar: "/avatar_icon.svg",
    },
    {
      id: 3,
      message: "Cool",
      likesCount: 1,
      avatar: "/avatar_icon.svg",
    },
    {
      id: 4,
      message: "Thanks",
      likesCount: 17,
      avatar: "/avatar_icon.svg",
    },
  ]
};

test('length of posts should be incremented', () => {
  let action = addNewPost("it-kava");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
  let action = addNewPost("it-kava");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("it-kava");
});

test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});