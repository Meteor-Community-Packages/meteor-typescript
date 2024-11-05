import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { exported } from './tla-test';

async function insertLink(title: string, url: string) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink(
      exported? 'Do the Tutorial':"Do it",
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    await insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    await insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    await insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});
