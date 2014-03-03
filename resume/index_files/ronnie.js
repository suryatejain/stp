(function (window) {
    var Ronnie = {};

    Ronnie.SubmitComment = function () {
        $('#btnComment').attr('disabled', 'disabled');
        $.post('/contact/CommentAJAX', {
            Name: $('#Name').val(),
            Email: $('#Email').val(),
            Comment: $('#Comment').val()
        }, function (result) {
            if (result) {
                alert("Thank you for your message.");
                $('#Name').val('');
                $('#Email').val('');
                $('#Comment').val('');
            }
            else {
                alert("I'm sorry, there was an error while trying to send your message");
            }
            $('#btnComment').removeAttr('disabled');
        }, 'json');
    };

    Ronnie.CommentPageInit = function () {
        $(document).ready(function () {
            $('#btnComment').click(function () {
                Ronnie.SubmitComment();
                return false;
            });
        });
    };

    window.Ronnie = Ronnie;
})(window);