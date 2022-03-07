import faker from 'faker';
import shortid from 'shortid';
export const generateDummyPost = (number) => {
  return Array(number)
    .fill()
    .map(() => ({
      id: shortid.generate(),
      user: shortid.generate(),
      content: faker.lorem.paragraph(),
      images: [{ src: faker.image.image() }],
      comments: [{ id: shortid.generate(), user: shortid.generate(), content: faker.lorem.paragraph() }],
      likes: [shortid.generate(), shortid.generate()],
    }));
};
