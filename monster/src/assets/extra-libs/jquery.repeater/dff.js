var room = 1;

function education_fields() {

    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("tr");
    divtest.setAttribute("class", "form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '  <td><select class="form-control font-12"> <option>Fournisseur 1\n' +
        '                                                                                        </option>\n' +
        '                                                                                        <option>Fournisseur 2</option>\n' +
        '                                                                                        <option>Fournisseur 3</option>\n' +
        '                                                                                        <option>Fournisseur 4</option>\n' +
        '                                                                                    </select></td>\n' +
        '                                                                                    <td><select class="form-control font-12">\n' +
        '                                                                                        <option>Axe 1\n' +
        '                                                                                        </option>\n' +
        '                                                                                        <option>Axe 2</option>\n' +
        '                                                                                        <option>Axe 3</option>\n' +
        '                                                                                    </select></td>\n' +
        '                                                                                    <td><select class="form-control font-12">\n' +
        '                                                                                        <option>Projet 1\n' +
        '                                                                                        </option>\n' +
        '                                                                                        <option>Projet 2</option>\n' +
        '                                                                                        <option>Projet 3</option>\n' +
        '                                                                                    </select>\n' +
        '                                                                                    <td><select class="form-control font-12">\n' +
        '                                                                                        <option>Volet 1\n' +
        '                                                                                        </option>\n' +
        '                                                                                        <option>Volet 2</option>\n' +
        '                                                                                    </select></td>\n' +
        '<td>  <button class="btn btn-danger font-10" type="button" onclick="remove_education_fields(' + room + ');"> <i class="fa fa-minus"></i> </button> </td></tr>';
    objTo.appendChild(divtest)
}

function remove_education_fields(rid) {
    $('.removeclass' + rid).remove();
}