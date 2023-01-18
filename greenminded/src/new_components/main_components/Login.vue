<template>
        <div class="login">
            <form>
                <div class="form-group">
                    <input type="text" placeholder="Username or Email Address *">
                </div> <!-- end .form-group -->
                <div class="form-group">
                    <input type="text" placeholder="Password *">
                </div> <!-- end .form-group -->
                <div class="clearfix">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Remember me
                        </label>
                    </div>
                    <a href="" class="lost-password">Lost your password ?</a>
                </div> <!-- end .clearfix -->
                <div class="button-wrapper"><button type="submit" class="button">Login</button></div>
                <div class="text-center">
                    <p>Don't have an account ? <a href="" class="signup-open">Sign up</a></p>
                    <div class="social">
                        <p>Connect with Social Networks</p>
                        <a href=""><img src="images/facebook.png" alt="facebook"></a>
                        <a href=""><img src="images/twitter.png" alt="twitter"></a>
                        <a href=""><img src="images/google-plus.png" alt="google plus"></a>
                    </div> <!-- end .social -->
                </div>
            </form>
        </div> <!-- end .login -->
</template>

<script>
export default{
    name: 'LoginElement',
    date(){
        return{

        }
    },
}
</script>
