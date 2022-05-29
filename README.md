# SQL QUERY EDITOR

This [SQL Query Editor](https://sql-editor-task.vercel.app/). was made by using [React JS](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [React-table](https://react-table.tanstack.com/) and [React Toastify](https://github.com/fkhadra/react-toastify#readme).
I have created this SQL Query Editor for the front-end internship opportunity at Atlan. It's sole purpose is to run query over certain random data set taken from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv). I have built a tab switching query editor where one could even write queries and as well as switch between tabs of the tables  to get the data and one could even save the queries which they want to use in the future.

## FEATURES

-> I have created a tab based table switching, so whenever one switch between the tables the query editor gets updated and then we could see the data of the table.

-> I have used react-table which stores memoized data, which helped in the re-rendering of data and hence enhanced the overall performance of the task.

-> I have added pagination and and even considered the possibility for managing the data in the chunks of 10,25 and 50 units on the page(making myself considerate enough to get the Brownie points).

-> I have also added a save query button which will apparently create an array in the local storage for the retrieval of all the saved queries every time when a person opens the web app.

-> I have even used React Toastify for any error or the successful execution of the queries.


## Performance Metrics and Enhancements

### The first contentful paint time according to LightHouse(Chrome Dev Tools) is 0.3 sec.
I have ran checks through LightHouse(Chrome Dev Tools) on my website over the desktop mode.
![rating report](https://github.com/xanxit/sql-editor/blob/readme/sql-rating.png)

### The fully load time according to GTmetrix is 563ms.
Apart from Chrome Dev Tools I have even evaluated my website's performance
![rating-report](https://github.com/xanxit/sql-editor/blob/readme/gt-metrix.png)

### The fully load time according to Tools.PingDom is 963ms.
Apart from Chrome Dev Tools I have even evaluated my website's performance
![rating-report](https://github.com/xanxit/sql-editor/blob/readme/toolpingdom.png)


-> I have used React Memo for caching the API calls, it makes my app more snappier as the re-rendering gets faster.

-> I have divided my project into various components inside the components folder, I have structured this way for the ease of people to understand the division of code with easily understandable name of the sub folders.

-> I have kept the number of state changes as low as possible. While this has been accompanied by a slight reduction in the feature set, it has more than made up for it in the load time of a re-render.

# PS: xanxit and xanxit10 both are me !
