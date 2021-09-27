# weather_station_data
Observation-data viewer for a weather station - simple app that uses Framework7

=============================================================================================

You can download the code as a zip from Github. Look for the green 'code' button.

Directory : App (run server here) : If you start a server (such as http-server) in this directory, you should be able
to access the functioning app through a browser, by entering the right ip/port code. Running the server, the terminal 
would probably display which ip/port code to use.

This app makes use of 3 data files which have been added to the root directory of the app.
log-central.xml / log-south.xml / notice.json .

Directory : WeatherStationDatDevSrc : this contains the src folder, which contains the source code typed out by
the author. Most of the source-code content is in /pages/home.f7 . There is also a small amount of code in 
/js/app.js .


=============================================================================================

This 'WeatherStationDat' app code is made public under the ' Mozilla Public License Version 2.0'
Find the licence text following this link : https://www.mozilla.org/en-US/MPL/2.0/
A copy of the licence document is also included in this directory.

----------------------------------------------------------------------------------------------

'WeatherStationDat' is a small basic app made using HTML, CSS, Javascript, JQuery, XML, JSON, and Framework7 
framework. It was made as an implementation answer for a job vacany assignment. 

This app is supposed to be a data and information viewer for the records made and kept by a weather station. The
app can request and get data from a server, for records kept on two regions of the country. After the code is 
installed in a server computer, in theory the data can be accessed from an internet browser, from anywhere with an 
internet connection.

User can select which region to get information on, what month and year to view data on, which weather type to
return data on. The program automatically shows which year and wet season it is. The app uses two XML files to
store the weather data. It also stores a notice for the user (from weather station) on a Json file.

The app does not use custom server code, which would have helped make more efficient data transfer. If custom
server code was used, possibly only the user's request data would be transmitted from server, saving data usage.
In this version the full weather record file is sent over.

=============================================================================================
