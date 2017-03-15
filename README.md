GIS Portal
========

This is the repository for the ZMT's GIS Portal.

We are also writing a scientific paper that describes the tool, it's repository
is located at https://github.com/patcurry/WebGISPaper.

Site Description
----------------

The GIS Portal is a web application that allows anyone with remotely stored 
GIS files (in the correct formats) to project their GIS files onto a map background.

The site does this by making a request to the dataset's url (provided by the site user)
then then projecting the dataset to the Leaflet map background. The site can currently handle
urls that do and do not require password and username authentication, and datasets that are password and 
username protected, and stored on owncloud.

On the main portal page datasets can be searched and filtered by title and viewed together or separately.
On the individual dataset pages user provided metadata can be viewed alongside the dataset. Eventually
datasets will be searchable by user, and other tags.

In the case that the user needs to update or delete a dataset record, there are pages that allow that to be
done. Any modifications to datasets must be done by users on their own databases. This site is only capable of
streaming datasets with GET based functions and cannot perform any POST based functions, which means that all
datasets are protected by the users who provide them.


Code
----

The majority of the code for this site is written in Python 3, JavaScript, HTML, and CSS.

The site uses the very popular Django web framework with a PostgreSQL database as the backend, the CSS framework
Bootstrap for aesthetics, and the JavaScript mapping library Leaflet to display datasets.

If you wish to run the functional tests this site has you will need the browser automation tool Selenium with python
bindings and a google chrome webdriver.

Leaflet js background


Installation and Dependencies
-----------------------------

* THIS NEEDS TO BE UPDATED *

This project requires python 3 and postgresql to be installed on your system already. For more information
on installing python 3 visit https://www.python.org/downloads/. For more information on installing postgres visit 
https://www.postgresql.org/docs/current/static/installation.html and
http://www.marinamele.com/taskbuster-django-tutorial/install-and-configure-posgresql-for-django.


Once these are installed on your computer open the terminal on your computer and navagate to the directory where you want
to store the project. Clone the repository in this directory, then create a virtual envionment in the directory (outside the
cloned repository) with this code:
```
pyvenv myenv
```


Activate the environment with this code:
```
source myenv/bin/activate
```


While the environment is active install django, django crispy forms, the postgres driver (psycopg2),
python requests, and selenium with pip.
```
pip install Django==1.10
pip install --upgrade django-crispy-forms
pip install psycopg2
pip install requests
pip install selenium
```

Then you should be able to create a database for the website to run on by configuring postgres. To do this follow the directions posted
on Marina Mele's excellent website http://www.marinamele.com/taskbuster-django-tutorial/install-and-configure-posgresql-for-django 
However instead of using:
```
$ createdb taskbuster_db
(or $ sudo -u postgres createdb taskbuster_db)
$ psql
(or $ sudo -u postgres psql)
CREATE ROLE myusername WITH LOGIN PASSWORD 'mypassword';
GRANT ALL PRIVILEGES ON DATABASE taskbuster_db TO myusername;
ALTER USER myusername CREATEDB;

```

use

```
$ createdb webgis_db
(or $ sudo -u postgres createdb taskbuster_db)
$ psql
(or $ sudo -u postgres psql)
CREATE ROLE webgis_user WITH LOGIN PASSWORD 'webgis_password';
GRANT ALL PRIVILEGES ON DATABASE webgis_db TO webgis_user;
ALTER USER webgis_user CREATEDB;
```


To deactivate the environment type "deactivate":
```
deactivate
```

font-awesome


Contribute
----------

If you would like to contribute to this project, submit a pull request. I would be delighted to have someone take a look at my code, and tear it apart.
I will say that if you contribute, that your contributions must pass unit and functional tests. There must also be documentation, or
explanation, so that I can understand what you did.


Support
-------

If you are having issues, please let the development team (Patrick Curry) know.
patrick.curry@leibniz-zmt.de


Plan
----

Soon I will be adding Turf.js to the program, which will allow me to perform functions such as unions, and joins, and buffers etc.
Currently the whole functional programming stuff is stumping me. I'm making really wild functions with too many arguements in the
'index_map.js' file.
