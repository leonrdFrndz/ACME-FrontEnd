var Acceder = document.getElementById('acceder'),
    Cerrar = document.getElementById('cerrar'),
    SingUp = document.getElementById('SingUp-Container');


Acceder.addEventListener('click', function(){
	SingUp.classList.add('active');
});

Cerrar.addEventListener('click', function(){
	SingUp.classList.remove('active');
});