import React, { useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/react';
import axios from 'axios';

const QuieroVoluntario: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    apellido: '',
    cedula: '',
    telefono: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Improved event typing for IonInput change events
  const handleInputChange = (e: CustomEvent) => {
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for password match before sending request
    if (formData.password !== formData.password_confirmation) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
      return;
    }

    console.log(formData)

    try {
      const response = await axios.post('https://adamix.net/defensa_civil/def/registro.php', {
        cedula: formData.cedula,
        nombre: formData.name,
        apellido: formData.apellido,
        clave: formData.password,
        correo: formData.email,
        telefono: formData.telefono,
      }, {
        headers: {
          'Content-Type': 'application/json' // Ensure correct content type for JSON
        }
      });

      console.log(response)

      // Display the server response message or a success message by default
      setAlertMessage(response.data.mensaje || 'Registration successful!');
      setShowAlert(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlertMessage('Failed to submit form. Please check your internet connection and try again.');
      setShowAlert(true);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput type="text" name="name" value={formData.name} onIonChange={handleInputChange} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonInput type="text" name="apellido" value={formData.apellido} onIonChange={handleInputChange} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Cédula</IonLabel>
            <IonInput type="text" name="cedula" value={formData.cedula} onIonChange={handleInputChange} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Teléfono</IonLabel>
            <IonInput type="tel" name="telefono" value={formData.telefono} onIonChange={handleInputChange} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Correo Electrónico</IonLabel>
            <IonInput type="email" name="email" value={formData.email} onIonChange={handleInputChange} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput type="password" name="password" value={formData.password} onIonChange={handleInputChange} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirmar Contraseña</IonLabel>
            <IonInput type="password" name="password_confirmation" value={formData.password_confirmation} onIonChange={handleInputChange} required />
          </IonItem>
          <IonButton type="submit" expand="block">Registrar</IonButton>
        </form>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Estado de Registro'}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default QuieroVoluntario;
