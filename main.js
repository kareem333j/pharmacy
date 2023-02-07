var input_search = document.getElementById("input-search");

function but1() {

    if (input_search.value == "cornetears" || input_search.value == "orchadexoline" || input_search.value == "Adrenocortine" || input_search.value == "Fostimon" || input_search.value == "Epoetin 4000" || input_search.value == "Epoetin" || input_search.value == "Pedialyte jouce" || input_search.value == "Nogravida" || input_search.value == "Gast-reg" || input_search.value == "Prontogest" || input_search.value == "Ferosac" || input_search.value == "Antodine" || input_search.value == "Mixtard 30" || input_search.value == "Mixtard" || input_search.value == "Prontogest 200gm" || input_search.value == "Prontogest 400gm" || input_search.value == "Cyclogest" || input_search.value == "Alfacareno" || input_search.value == "Cyclophrine" || input_search.value == "Alfacalcidol" || input_search.value == "Sacrofer" || input_search.value == "Sanofi-aventis" || input_search.value == "Tetanus antitoxin injection" || input_search.value == "Tetanus" || input_search.value == "Apidra solostar" || input_search.value == "Apidra" || input_search.value == "Novorapid flexpen" || input_search.value == "Novorapid" || input_search.value == "Cerebrolysin 5ml" || input_search.value == "Cerebrolysin 1ml" || input_search.value == "Cerebrolysin" || input_search.value == "Unitrexate" || input_search.value == "Gastrotidine" || input_search.value == "Cal-heparine 5000 l.u" || input_search.value == "Cal-heparine" || input_search.value == "Cal-heparine 5000" || input_search.value == "Tetanus antitoxin injection 1500iu") {
        document.getElementById("result").className = "result-on";
        document.getElementById("result").innerHTML = "تلاجة";
    } else {
        document.getElementById("result").className = "result-on";
        document.getElementById("result").innerHTML = "غير مسجل : لاحظ .. لم يسجل إلا دواء التلاجة فقط وستكون كل الادوية متاحة قريبا";
    }

}