import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Historia: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Historia</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Historia</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTitle className="mt-5 text-center font-bold" color="primary"> 
          Historia de la Defensa Civil Dominicana:
        </IonTitle>

        <div className="flex flex-col text-justify">

          <IonText className="my-4 mx-5">
            Antes del año 1966, un grupo de radio aficionados cuando llegaba la temporada de 
            huracanes, se reunían en la Cruz Roja, para si surgía algún tipo de emergencia, 
            inmediatamente ponerse a la disposición y ayudar en todo lo posible, inclusive, 
            usando sus propios equipos de radio aficionados para así tener comunicación con el 
            exterior en caso de que las redes telefónicas resultaran afectadas.
          </IonText>

          <IonText className="my-4 mx-5">
            Al surgir el triunvirato fue designado el Dr. Rafael Cantizano arias, 
            Presidente de la Cruz Roja, al mismo tiempo nombraron al Ing. Carlos D´Franco 
            como Director de la Defensa Civil, quien con un pequeño grupo compuesto de seis 
            personas, se instaló en la calle Francia esquina Galván, siendo esa la primera 
            oficina de la Defensa Civil.
          </IonText>
          
          <IonText className="my-4 mx-5">
            Al surgir el Gobierno Provisional presidido por el Dr. Héctor García Godoy, 
            a los diecisiete días del mes de junio de 1966, fue promulgada la Ley 257, mediante 
            la cual fue creada la Defensa Civil, institución dependiente de la Secretaría 
            Administrativa de la Presidencia, y quien en la actualidad preside la Comisión 
            Nacional de Emergencias.
          </IonText>

          <IonText className="my-4 mx-5">
            La Defensa Civil representa la ejecución de todas las funciones de emergencias para
            salvaguardar la vida y la propiedad de los habitantes de la República Dominicana, 
            para proteger la vida económica de la población y para reducir al mínimo y reparar 
            los perjuicios y daños que resulten de todo tipo de desastre.
          </IonText>

          <IonText className="my-4 mx-5">
            La Defensa Civil propiamente hablando, no es sólo otro departamento del Estado, es 
            la coordinación de todos los recursos con que cuenta el país para proteger vidas y 
            propiedades. Los recursos del Gobierno y los recursos del pueblo se unen bajo la 
            dirección de la Oficina Central de la Defensa Civil para lograr una acción poderosa, 
            con la cual hacer frente a todo tipo de calamidad que pueda presentarse. 
            La Defensa Civil es prevención, abnegación, vocación de servicio, amor, y es guía 
            permanente en procura de la conservación de tu vida y la de tus seres queridos.
          </IonText>

          <IonText className="my-4 mx-5">
            Al promulgar la Ley 257 en el 1966, del local de la Av. Francia esquina Galván, fue 
            trasladada la sede central de la Defensa Civil a la calle Dr. Delgado No.164, mas 
            tarde en la gestión del Contralmirante Radhames Lora Salcedo se trasladó a la Plaza 
            de la salud, donde contamos con un moderno edificio y el Centro de Operaciones de 
            Emergencias más moderno de América Latina y el Caribe.
          </IonText>

          <IonText className="my-4 mx-5">
            En San Pedro de Macorís, a partir del año 1972 fue que se creó el primer comité de la 
            Defensa Civil, siendo su primer presidente el señor Juan Stapleton Gómez, quien se 
            mantuvo presidiendo la institución hasta el año 1976 cuando fue sustituido por el Lic. 
            Federico Luis Nina, los miembros se reunían en el local del Cuerpo de Bomberos Civiles 
            de nuestra ciudad, más tarde para el año 1980 pasó a presidir la misma el Dr. Luis Silvestre 
            Nina, quien se mantuvo hasta el año 1992 y gracias a su gestión se logró la donación del 
            local que alojaba las oficinas de American Air Lines, propiedad del club centro, 
            en la avenida Domínguez Charo, a partir del año 1992 y hasta el año 2000 el Dr. Federico Nina 
            Ceara se mantuvo en la presidencia de la institución, en el año 2000 paso a presidir la 
            institución el señor Rafael Antonio Merino Amiama, quien llego hacer Director Regional, este 
            fue relevado en el 2004 por el Sr. Pablo Polanco Rosa
          </IonText>

          <IonText className="my-4 mx-5">
            En el año 2001 por gestiones del Dr. Mariano Morla Lluberes, gobernador Provincial de 
            entonces, las oficinas de la Defensa Civil fueron trasladadas al local donde funcionaba
            la emergencia del Hospital Dr. Carl Th. Georg.

            En el año 2003 tras gestiones realizadas por el Señor Pablo Polanco Rosa, entonces 
            oficial de Planes y el Director Ejecutivo Contralmirante Radhamés Lora Salcedo, se 
            logró la facilitación de un local por el Consejo Nacional de Drogas. en la Av. 
            Francisco A. Caamaño donde funciona en la actualidad.
          </IonText>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Historia;
