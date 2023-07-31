let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = true;
let userHasSecAccount = false;

if(userLoggedIn && userHasPremiumAccount){
	if(userLoggedIn && userHasPremiumAccount && userHasSecAccount){
	console.log('User is logged in and has a premium account and SEC');
	} else {
	console.log('User is logged in and has premium account');
	}
} 
if(userLoggedIn && userHasMegaPremiumAccount){
	if(userLoggedIn && userHasMegaPremiumAccount && userHasSecAccount){
	console.log('User is logged in and has a premium mega account and SEC');
	} else {
	console.log('User is logged in and has mega premium account');
	}
} 