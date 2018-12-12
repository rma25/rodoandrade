function CreateDefaultSquareBoard(squareNumber) {
    var boardValues = [];
    var boardHTML = '';

    //TODO: this will be coming from the database (temp filler)
    for (var row = 0; row < 10; row++) {
        var cols = [];
        for (var col = 1; col <= 10; col++) {
            if (col % 2 == 0 && row % 2 == 0 && squareNumber == 1) {
                cols.push('Steve');
            }
            else if (col % 2 != 0 && row % 2 == 0 && squareNumber == 2 && row < 5) {
                cols.push('Josh');
            }
            else if (col % 2 == 0 && row % 2 != 0 && squareNumber == 3 && row < 2) {
                cols.push('Rodo');
            }
            else {
                cols.push(((10 * row) + col));
            }
        }
        boardValues.push(cols);
    }


    boardHTML += '<div class="row mt-5 mx-auto">';
    boardHTML += '<div class="col-12 pt-4  text-nowrap text-center">AFC Champion</div>';
    boardHTML += '</div>';

    boardHTML += '<!-- Top Row - ' + squareNumber + '-->';
    boardHTML += '<div class="row" id="topSquareRow' + squareNumber + '">';

    boardHTML += '<div class="col-1 py-3 squareValue2"></div>';
    boardHTML += '<div class="col-1 py-3 squareValue2"></div>';

    for (var col = 0; col < 10; col++) {
        boardHTML += '<div class="col-1 py-3 squareValue2"> 0 </div>';
    }

    boardHTML += '</div>';

    for (var row = 0; row < boardValues.length; row++) {
        boardHTML += '<!-- Row - ' + row + '-->';
        boardHTML += '<div class="row ' + ((row + 1 == boardValues.length) ? 'mb-5' : '') + '" id="RowNumber' + row + '">';

        boardHTML += '<div class="col-1 sideWaysText pr-2 leftTitle">' + ((row * 2 === boardValues.length) ? 'NFC' : '') + '</div>';

        boardHTML += '<div class="col-1 text-center px-2 clickable squareValue3"> 0 </div>';

        for (var col = 0; col < boardValues[row].length; col++) {
            boardHTML += '<div class="col-1 border rounded ' + (!Number(boardValues[row][col]) ? 'bg-secondary claimedSquare' : '') + ' squareButton" id="squareBtn' + squareNumber + '-' + row + '' + col + '">';
            boardHTML += '  <div class="squareValue btn text-center clickable'+ (Number(boardValues[row][col]) ? '': ' px-1 claimedValue')+'">';
            boardHTML += boardValues[row][col];
            boardHTML += '  </div>';
            boardHTML += '  <div class="item btn text-center clickable animated infinite pulse delay-1s" style="display:none;">';
            boardHTML += '<i class="fas fa-football-ball"></i>';
            boardHTML += '  </div>';
            boardHTML += '</div>';
        }

        boardHTML += '</div>';
    }

    return boardHTML;
}

$('#cardContent1').append(CreateDefaultSquareBoard(1));
$('#cardContent2').append(CreateDefaultSquareBoard(2));
$('#cardContent3').append(CreateDefaultSquareBoard(3));

GetRemainingSquaresCount(1);
GetRemainingSquaresCount(2);
GetRemainingSquaresCount(3);

$('div[id*="squareBtn"]').hover(function () {
    var ele = $(this);

    if (Number(ele.find('.squareValue').text())) {
        ele.children('.item').show();
        ele.children('.squareValue').hide();
    }
}, function () {
    var ele = $(this);

    if (Number(ele.find('.squareValue').text())) {
        ele.children('.item').hide();
        ele.children('.squareValue').show();
    }
});

function GetRemainingSquaresCount(squareNumber) {
    var remainingTotal = 0;

    if (squareNumber) {
        $("#squaresCard0-" + squareNumber + "").find(".squareValue").each(function (index, item) {
            if (Number($(item).text())) {
                remainingTotal++;
            }
        })

        $("#remainingNumberValue" + squareNumber + "").text(remainingTotal);
    }
}

$('div[id*="squareBtn"]').on('click', AllowUserToClaimSquare);

function AllowUserToClaimSquare() {
    if (Number($(this).text().replace('Claim', '').trim())) {
        $('#loginModal').modal('show');
    }
}


function GetSquareBoardValues() {
    //Get it from the db   
}

//Change Login modal
$('#signUpButton').on('click', function () {
    $(".signUp").removeClass('hideEverything');
    $('#loginModalTitle').text('Sign Up');
});

$('#loginModal').on('hidden.bs.modal', function () {
    $(".signUp").addClass('hideEverything');
    $('#loginModalTitle').text('Sign In');
})