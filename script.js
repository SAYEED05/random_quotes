
fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then((data) => {

        data = JSON.stringify(data);
        data = JSON.parse(data);
        var click = 0, count = 0;

        document.getElementById('next').addEventListener('click', function () {
            click = Math.floor(Math.random() * data.length + 1);
            quote = '"' + data[click]['text'] + '"';
            author = data[click]['author'];
            document.getElementById("quote").innerHTML += '<h3 id=' + count + '>' + quote + '</h3>';
            document.getElementById("author").innerHTML += '<h5 id=' + count + 'auth> -' + author + '</h5>';
            count += 1;
            previous = count - 1;
            if (previous >= 1) {
                document.getElementById(previous - 1).remove();
                document.getElementById(previous - 1 + 'auth').remove();
            } else return;
        })
    }
    )

