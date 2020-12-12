var room = 1;

function education_fields() {

    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '   <form class="row">\n' +
        '                                                                                    <div class="col-sm-3">\n' +
        '                                                                                        <div class="form-group">\n' +
        '                                                                                            <select class="form-control">\n' +
        '                                                                                                <option>Convention\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet1">\n' +
        '                                                                                                    Convention1\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet2">\n' +
        '                                                                                                    Convention2\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="volet3">\n' +
        '                                                                                                    Convention3\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet4">\n' +
        '                                                                                                    Convention4\n' +
        '                                                                                                </option>\n' +
        '                                                                                            </select></div>\n' +
        '                                                                                    </div>\n' +
        '                                                                                    <div class="col-sm-2">\n' +
        '                                                                                        <div class="form-group">\n' +
        '                                                                                            <select class="form-control">\n' +
        '                                                                                                <option>Axe</option>\n' +
        '                                                                                                <option value="Volet1">\n' +
        '                                                                                                    Axe1\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet2">\n' +
        '                                                                                                    Axe2\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="volet3">\n' +
        '                                                                                                    Axe3\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet4">\n' +
        '                                                                                                    Axe4\n' +
        '                                                                                                </option>\n' +
        '                                                                                            </select>\n' +
        '                                                                                        </div>\n' +
        '                                                                                    </div>\n' +
        '                                                                                    <div class="col-sm-3">\n' +
        '                                                                                        <div class="form-group">\n' +
        '                                                                                            <select class="form-control">\n' +
        '                                                                                                <option>Projet</option>\n' +
        '                                                                                                <option value="Volet1">\n' +
        '                                                                                                    Projet1\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet2">\n' +
        '                                                                                                    Projet2\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="volet3">\n' +
        '                                                                                                    Projet3\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet4">\n' +
        '                                                                                                    Projet4\n' +
        '                                                                                                </option>\n' +
        '                                                                                            </select>\n' +
        '                                                                                        </div>\n' +
        '                                                                                    </div>\n' +
        '                                                                                    <div class="col-sm-2">\n' +
        '                                                                                        <div class="form-group">\n' +
        '                                                                                            <select class="form-control">\n' +
        '                                                                                                <option>Volet</option>\n' +
        '                                                                                                <option value="Volet1">\n' +
        '                                                                                                    Volet1\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet2">\n' +
        '                                                                                                    Volet2\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="volet3">\n' +
        '                                                                                                    Volet3\n' +
        '                                                                                                </option>\n' +
        '                                                                                                <option value="Volet4">\n' +
        '                                                                                                    Volet4\n' +
        '                                                                                                </option>\n' +
        '                                                                                            </select>\n' +
        '                                                                                        </div>\n' +
        '                                                                                    </div>\n' +
        '                                                                                    <div class="col-sm-1">' +
        ' <div class="form-group">\n' +
        '                                                                                        <button class="btn btn-danger" type="button" onclick="remove_education_fields(' + room + ');"> <i class="fa fa-minus"></i> </button>\n' +
        '                                                                                        </div>\n' +
        '                                                                                    </div>\n' +
        '                                                                                </form>';
    objTo.appendChild(divtest)
}

function remove_education_fields(rid) {
    $('.removeclass' + rid).remove();
}