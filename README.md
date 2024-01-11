# Anime Hub

Submitted by: **Beteab Tefera**

This web app: **The Anime Hub app is a web application that allows users to view and interact with anime-related content. Users can create an account, log in, and view a list of anime titles, read detailed information about each anime, and leave comments on individual anime pages. The app is built using React and Supabase, and leverages various React libraries and Supabase features to implement different functionalities such as authentication, API requests, state management, and database updates. The application uses a PostgreSQL database to store anime information and user comments, and Supabase provides the necessary APIs and tools to connect to and manipulate this database. Overall, the app aims to provide anime fans with a user-friendly, interactive platform to discover, explore, and share their favorite anime titles.**

Time spent: **25** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form allows users to add new cremates**
  - [x] Posts must contain a title, and optionally additional textual content and/or an image added as an external image URL
- [x] **A home feed displaying previously created posts**
  - [x] By default, only the time created, title, and upvotes count for each post is shown on the posts feed
  - [x] Clicking on a post shall direct the user to a new page for the selected post
- [x] **Users can sort posts by either their created time or upvotes count**
- [x] **Users can search for posts by title**
- [x] **A separate post page for each created post, where any additional information is shown, including content, image, and comments**
- [x] **Users can leave comments underneath a post on the post page**
- [x] **Each post should have an upvote button on the post page. Each click increases its upvotes count by one**
  - [x] Users can upvote any post for any number of times, but not downvote
- [x] **A previously created post can be edited from its post page**
- [x] **A previously created post can be deleted from its post page**

Stretch Features
- [x] Display a loading animation whenever data is being fetched
- [x] Users can upload images directly from their local machine as an image file
- [ ] Users can only edit and delete posts or delete comments by entering the secret key, which is set by the user during post creation
- [ ] Upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them
- [ ] Users can repost a previous post by referencing its post ID. On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [ ] Users can customize the interface, e.g. selecting the color scheme or showing the content and image of each post on the home feed
- [ ] Users can share and view web videos
- [ ] Users can set flags such as "Question" or "Opinion" while creating a post. Then, users can filter posts by flags on the home feed.


## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/BeteabTefera/AnimeHub/blob/main/Walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Lice Cap 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

The logo image keeps broken but aside that everything is done well.
Of course I plan to work on it more to make it scalable and more user oriented


## License

    Copyright [2023] [Beteab Tefera]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
