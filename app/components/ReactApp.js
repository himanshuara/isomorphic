/** @jsx React.DOM */

var React = require('react/addons');

/* create factory with griddle component */
var grid = React.createFactory(require('griddle-react'));

var data = require('../data/data.js').data;
var columnData = require('../data/columnData.js').columnData;
var resultsPerPage = 200;

var ReactApp = React.createClass({

      componentDidMount: function () {
        console.log(data);

      },
      render: function () {
        return (
          <div id="table-area">

             <grid results={data}
                      columnMetadata={columnData}
                      resultsPerPage={resultsPerPage}
                      tableClassName="table"/>

          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;