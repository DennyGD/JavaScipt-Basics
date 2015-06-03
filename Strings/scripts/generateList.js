/*
Write a function that creates a HTML <ul> using a template for every HTML <li>.
The source of the list should be an array of elements.
Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.

 Example: HTML:

 <div data-type="template" id="list-item">
 <strong>-{name}-</strong> <span>-{age}-</span>
 /div>

 JavaScript:

 var people = [{name: 'Peter', age: 14},…];
 var tmpl = document.getElementById('list-item').innerHtml;
 var peopleList = generateList(people, template);
 //peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
*/

(function(){
    var people = [{name: 'Peter', age: 14},
        {name: 'George', age: 20},
        {name: 'Elizabeth', age: 24}],
        template = document.getElementById('future-list').innerHTML,
        newList = generateListByTemplate(people, template),
        newElement = document.createElement('div');

    console.log('GENERATE LIST');
    console.log(newList);

    newElement.innerHTML = '<h2>Result:</h2>' + newList;
    document.body.appendChild(newElement);

    function generateListByTemplate(arr, template){
        if (!template || arr.length < 1) {
            return 'Invalid arguments.';
        }

        var arrLength = arr.length,
            list = '<ul>',
            currentLi,
            currentObject = {},
            placeholder;

        for (var i = 0; i < arrLength; i += 1) {
            currentLi = '<li>' + template;
            currentObject = arr[i];

            for (var prop in currentObject) {
                placeholder = '-{' + prop + '}-';
                currentLi = currentLi.replace(placeholder, currentObject[prop]);
            }

            list += currentLi + '</li>';
        }

        list += '</ul>';

        return list;
    }
}());