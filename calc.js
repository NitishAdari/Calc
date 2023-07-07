var o1 = "";
var o2 = "";
var operand = "";
var count = $(".button");
console.log(count.length);

function r(a){
    return parseFloat(a);
}

function sim(operand, o1, o2){
    console.log("uuu");
    if(operand == "+"){return (r(o1) + r(o2));}
    if(operand == "-"){return (r(o1) - r(o2));}
    if(operand == "*"){ return (r(o1) * r(o2));}
    if(operand == "/"){return (r(o1) / r(o2));}
}

function print(operand, o1, o2){
    if(operand == "+"){$("#display").text(r(o1) + r(o2));}
    if(operand == "-"){$("#display").text(r(o1) - r(o2));}
    if(operand == "*"){$("#display").text(r(o1) * r(o2));}
    if(operand == "/"){$("#display").text(r(o1) / r(o2));}
}

count.click(function(){
    var eu = $(this).text().trim();
    console.log(eu);
    if($(this).text().trim() === "AC"){
        $(".main").text("");
        $("#currval").text("");
        o1 = "";
        operand = "";
        o2 = "";
    }
    else{
        if($(this).text().trim() == "="){
            if(operand == "+"){$("#display").text(r(o1) + r(o2));}
            if(operand == "-"){$("#display").text(r(o1) - r(o2));}
            if(operand == "*"){$("#display").text(r(o1) * r(o2));}
            if(operand == "/"){$("#display").text(r(o1) / r(o2));}
        }
        if($(this).text().trim() == "+"){
            if(operand == ""){
                operand = "+";
            }
            if(o2 != ""){
                o1 = sim(operand, o1, o2);
                o2 = "";
            }
            operand = "+";
            $("#currval").append($(this).text().trim());
            $(".main").text("");
        }
        if($(this).text().trim() == "-"){
            if(operand == ""){
                operand = "-";
            }
            if(o2 != ""){
                o1 = sim(operand, o1, o2);
                o2 = "";
            }
            operand = "-";
            $("#currval").append($(this).text().trim());
            $(".main").text("");
        }
        if($(this).text().trim() == "*"){
            if(operand == ""){
                operand = "*";
            }
            if(o2 != ""){
                o1 = sim(operand, o1, o2);
                o2 = "";
            }
            operand = "*";
            $("#currval").append($(this).text().trim());
            $(".main").text("");
        }
        if($(this).text().trim() == "/"){
            if(operand == ""){
                operand = "/";
            }
            // operand != $(this).text().trim()
            if(o2 != ""){
                o1 = sim(operand, o1, o2);
                o2 = "";
            }
            operand = "/";
            $("#currval").append($(this).text().trim());
            $(".main").text("");
        }
        if($(this).text().trim() != "+" && $(this).text().trim() != "-" && $(this).text().trim() != "*" && $(this).text().trim() != "/" && $(this).text().trim() != "="){
            if(operand == ""){
                if($(this).text().trim() == "+/-"){
                    o1 = -1 * r(o1);
                    $(".main").text(o1);
                }else{
                    console.log(o1);
                    $(".main").append($(this).text().trim());
                    $("#currval").append($(this).text().trim());
                    o1 = $(".main").text().trim();
                    print(operand, o1, o2);
                }
            }else{
                if($(this).text().trim() == "+/-"){
                    o2 = -1 * r(o2);
                    $(".main").text(o2);
                }
                else{
                    $(".main").append($(this).text().trim());
                    $("#currval").append($(this).text().trim());
                    //o2 = $(".main").text().trim();
                    o2 = o2 + $(this).text().trim();
                    print(operand, o1, o2);
                }
            }
        }
    }
});    

// count.keypress(function(event){
//     var eu = event.key;
//     console.log(eu);
//     if(event.key === "AC"){
//         $(".main").text("");
//         o1 = "";
//         operand = "";
//         o2 = "";
//     }
//     else{
//         if(event.key == "="){
//             if(operand == "+"){$("#display").text(r(o1) + r(o2));}
//             if(operand == "-"){$("#display").text(r(o1) - r(o2));}
//             if(operand == "*"){$("#display").text(r(o1) * r(o2));}
//             if(operand == "/"){$("#display").text(r(o1) / r(o2));}
//         }
//         if(event.key == "+"){
//             if(operand == ""){
//                 operand = "+";
//             }
//             if(operand != event.key){
//                 o1 = sim(operand, o1, o2);
//                 o2 = "";
//             }
//             operand = "+";
//             $(".main").text("");
//         }
//         if(event.key == "-"){
//             if(operand == ""){
//                 operand = "-";
//             }
//             if(operand != event.key){
//                 o1 = sim(operand, o1, o2);
//                 o2 = "";
//             }
//             operand = "-";
//             $(".main").text("");
//         }
//         if(event.key == "*"){
//             if(operand == ""){
//                 operand = "*";
//             }
//             if(operand != event.key){
//                 o1 = sim(operand, o1, o2);
//                 o2 = "";
//             }
//             operand = "*";
//             $(".main").text("");
//         }
//         if(event.key == "/"){
//             if(operand == ""){
//                 operand = "/";
//             }
//             if(operand != event.key){
//                 o1 = sim(operand, o1, o2);
//                 o2 = "";
//             }
//             operand = "/";
//             $(".main").text("");
//         }
//         if(event.key != "+" && event.key != "-" && event.key != "*" && event.key != "/" && event.key != "="){
//             if(operand == ""){
//                 if(event.key == "+/-"){
//                     o1 = -1 * r(o1);
//                     $(".main").text(o1);
//                 }else{
//                     console.log(o1);
//                     $(".main").append(event.key);
//                     o1 = $(".main").text().trim();
//                 }
//             }else{
//                 if(event.key == "+/-"){
//                     o2 = -1 * r(o2);
//                     $(".main").text(o2);
//                 }
//                 else{
//                     $(".main").append(event.key);
//                     o2 = $(".main").text().trim();
//                 }
//             }
//         }
//     }
// });

