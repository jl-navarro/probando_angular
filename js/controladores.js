app.controller('mostrarContactosEnTabla',['$scope',function($scope){
	$scope.contactos = listaContactos;
}]);

app.controller('newContactController',['$scope',function($scope){
	$scope.contactos = listaContactos;
    $scope.addContact = function(){
		var newContact = new Contacto($scope.nombreNuevoContacto,$scope.telefonoNuevoContacto,$scope.emailNuevoContacto);
		if((newContact.nombre == undefined) || (newContact.nombre == '') || (newContact.telefono == undefined) || (newContact.telefono == '')
			|| (newContact.email == undefined) || (newContact.email == '')){
			alert('parametros no validos');
			document.location = "#/";
			return;
		}
		$scope.contactos.push(newContact);
		document.location = "#/see";
	}
}]);

app.controller('modifyContactController',['$scope',function($scope){
    $scope.contactos = listaContactos;
	$scope.modifyContact = function(){
		var checkboxNombre = document.getElementById('checkboxModificarNombre');
		var checkboxTelefono = document.getElementById('checkboxModificarTelefono');
        var checkboxEmail = document.getElementById('checkboxModificarEmail');
        var newName = undefined;
        var newPhone = undefined;
        var newMail = undefined;
        if($scope.nombreModificarContacto == undefined || $scope.nombreModificarContacto == ''){
            alert('El nombre no es válido');
            document.location = '#/';
        }
        if(checkboxNombre.checked){
            newName = ($scope.nuevoNombreModificarContacto == undefined || $scope.nuevoNombreModificarContacto == '') ? undefined : $scope.nuevoNombreModificarContacto;
        }
        if(checkboxTelefono.checked){
            newPhone = ($scope.nuevoTelefonoModificarContacto == undefined || $scope.nuevoTelefonoModificarContacto == '') ? undefined : $scope.nuevoTelefonoModificarContacto;
        }
        if(checkboxEmail.checked){
            newMail = ($scope.nuevoEmailModificarContacto == undefined || $scope.nuevoEmailModificarContacto == '') ? undefined : $scope.nuevoEmailModificarContacto;
        }
        var contacto;
        $scope.contactos.some(function(entry) {
            if (entry.nombre.toLowerCase() == $scope.nombreModificarContacto.toLowerCase()) {
                contacto = entry;
                return true;
            }
        });
        contacto.nombre = (newName == undefined) ? contacto.nombre : newName;
        contacto.telefono = (newPhone == undefined) ? contacto.telefono : newPhone;
        contacto.email = (newMail == undefined) ? contacto.email : newMail;
        document.location = '#/see';
    }
}]);

app.controller('removeContactController',['$scope',function($scope){
    $scope.contactos = listaContactos;
    $scope.removeContact = function(){
        var name = $scope.nombreBorrarContacto;
        if(name == undefined || name == ''){
            alert('El nombre no es válido');
            document.location = '#/';
        }
        var index;
        $scope.contactos.some(function(contacto,indice){
            if(contacto.nombre.toLowerCase() == name.toLowerCase()){
                index = indice;
                return;
            }
        });
        $scope.contactos.splice(index,1);
        document.location = '#/see';
    }
}]);