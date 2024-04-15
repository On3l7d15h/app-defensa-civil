import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonLoading, IonMenuButton, IonPage, IonTitle, IonToast, IonToolbar, useIonRouter } from '@ionic/react';
import { arrowBack, sendOutline, subwayOutline } from 'ionicons/icons';
import React from "react";

const QuieroVoluntario: React.FC = () => {

  // variables and states
  const [formData, setFormData] = React.useState<any>({
  	cedula: "",
    nombre: "",
    apellido: "",
    clave: "",
    confirmar: "",
    correo: "",
    telefono: ""
  })
  const [message, setMessage] = React.useState<string>("");
  const [openToast, setOpenToast] = React.useState<boolean>(false);
  const [showLoading, setShowLoading] = React.useState<boolean>(false);
  const navigation = useIonRouter()
  
  // functions
  const handleOnSubmit = async (e: any) => {
  	
    // preventing default behavior
  	e.preventDefault();

    // validation
    if ((formData["cedula"] === "" || formData["cedula"].length === 0) || formData["cedula"].length < 10) {
        setMessage("El campo cedula no está completado como se espera, no puede estar vacío o no tiene la cantidad de digitos mínimos.")
        setOpenToast(true);
        return;
    }

    if ((formData["nombre"] === "" || formData["nombre"].length === 0)) {
      setMessage("El campo nombre no está completado como se espera, no puede estar vacío.")
      setOpenToast(true);
      return;
    }

    if ((formData["apellido"] === "" || formData["apellido"].length === 0)) {
      setMessage("El campo apellido no está completado como se espera, no puede estar vacío.")
      setOpenToast(true);
      return;
    }

    if ((formData["clave"] === "" || formData["clave"].length === 0) || formData["clave"].length < 10) {
      setMessage("El campo clave no está completado como se espera, no puede estar vacío y debe ser de mínimo 8 caracteres en adelante.")
      setOpenToast(true);
      return;
    }
    
    if ((formData["confirmar"] === "" || formData["confirmar"].length === 0) || formData["confirmar"] !== formData["clave"]) {
      setMessage("El campo confirmación de la clave no está completado como se espera, no puede estar vacío y debe coincidir con la clave.")
      setOpenToast(true);
      return;
    }

    if ((formData["correo"] === "" || formData["correo"].length === 0)) {
      setMessage("El campo correo de la clave no está completado como se espera, no puede estar vacío.")
      setOpenToast(true);
      return;
    }

    if ((formData["telefono"] === "" || formData["telefono"].length === 0) || formData["telefono"].length < 9) {
      setMessage("El campo telefono no está completado como se espera. No debe estar vacío y debe tener una longitud de al menos 10 números.")
      setOpenToast(true);
      return;
    }

    setShowLoading(true);
    
    var params = new URLSearchParams();
    params.append('cedula', formData["cedula"]);
    params.append('nombre', formData["nombre"]);
    params.append('apellido', formData["apellido"]);
    params.append('clave', formData["clave"]);
    params.append('correo', formData["correo"]);
    params.append('telefono', formData["telefono"]);

    try 
    {
      await fetch(`https://adamix.net/defensa_civil/def/registro.php`,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // Tipo de contenido de la solicitud
          },
          // mode: "no-cors",
          body: params
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if(data.exito)
          {
            setMessage(data.mensaje)
            setOpenToast(true);
            setFormData({
              cedula: "",
              nombre: "",
              apellido: "",
              clave: "",
              confirmar: "",
              correo: "",
              telefono: ""
            })
          }
          else
          {
            setMessage(data.mensaje)
            setOpenToast(true);
          }
        })
        .catch((err) => console.error(err))
    } 
    catch (error: any) 
    {
      console.error(error);
      setMessage(error.message || 'Error desconocido');
      setOpenToast(true);
    } finally {
      setShowLoading(false);
    }
    
    // Otherwise
    return true;
  }
  
  const handleOnChange = (e: any) => {
  	setFormData((value: any) => {
      value = {
        ...value,
        [e.target.name]: e.target.value
      }
      return value;
    })
  }

  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Quiero ser Voluntario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quiero ser Voluntario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTitle color="primary" className="my-4">
          Formulario <small className="opacity-25"> | voluntariado</small>
        </IonTitle>

        <IonList className="m-4">
          
          {/* Cedula Field */}
          <IonItem>
            <IonInput 
              name="cedula"
              onIonChange={(e: any) => handleOnChange(e)}
              placeholder='Cedula' 
            />
          </IonItem>
          
          {/* Nombre Field */}
          <IonItem>
            <IonInput
              name="nombre"
              onIonChange={(e: any) => handleOnChange(e)} 
              placeholder='Nombre' 
            />
          </IonItem>

          {/* Apellido Field */}
          <IonItem>
            <IonInput 
              name="apellido"
              onIonChange={(e: any) => handleOnChange(e)} 
              placeholder='Apellido' 
            />
          </IonItem>
          
          {/* Clave Field */}
          <IonItem>
            <IonInput 
              name="clave"
              type="password"
              onIonChange={(e: any) => handleOnChange(e)} 
              placeholder='Clave' 
            />
          </IonItem>

          {/* Confirmar clave field */}
          <IonItem>
            <IonInput 
              name="confirmar"
              type="password"
              onIonChange={(e: any) => handleOnChange(e)} 
              placeholder='Confirmar Clave' 
            />
          </IonItem>
          
          {/* Correo Field */}
          <IonItem>
            <IonInput 
              name="correo"
              type="email"
              onIonChange={(e: any) => handleOnChange(e)} 
              placeholder='Correo' 
            />
          </IonItem>
          
          {/* Telefono Field */}
          <IonItem>
            <IonInput 
              name="telefono"
              onIonChange={(e: any) => handleOnChange(e)} 
              placeholder='Telefono' 
            />
          </IonItem>

          {/* Botones */}
          <div className="w-full flex flex-row">
            <IonButton onClick={(e) => handleOnSubmit(e)} className="font-bold w-1/2 mx-2">
              <IonIcon 
                icon={sendOutline} className="mx-2" 
              />
              Subir
            </IonButton>

            <IonButton onClick={() => navigation.push("/", "forward", "pop")} color="medium" className="font-bold w-1/2 mx-2">
              <IonIcon icon={arrowBack} className="mx-2" />
              Volver
            </IonButton>
          </div>
        </IonList>

        <IonToast 
          duration={5000}
          message={message}
          isOpen={openToast}
          color="primary"
          onDidDismiss={() => setOpenToast(false)}
        />

        <IonLoading
          isOpen={showLoading}
          message={'Cargando...'}
        />


      </IonContent>
    </IonPage>
  );
};

export default QuieroVoluntario;
