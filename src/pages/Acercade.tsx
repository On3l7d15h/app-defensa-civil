import { useIonRouter, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonImg, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonText } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React from "react";

import ExploreContainer from '../components/ExploreContainer';

const Acercade: React.FC = () => {

  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
      
        <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <div className="flex flex-row justify-between items-center">
            <IonTitle>
              Acerca de nosotros
            </IonTitle>
          </div>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>
              Acerca de nosotros
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="w-full flex justify-center items-center gap-4 mt-4">
            <section className='w-full w-48 h-48 rounded-full overflow-hidden'>
                <IonImg className="" src="/public/developers/onell.jpeg"/>
            </section>

            <section className='w-full w-48 h-48 rounded-full overflow-hidden'>
                <IonImg className="" src="/public/developers/ramy.jpg"/>
            </section>
        </div>

        <IonList className="mt-4">
            <IonItem>
                <IonLabel color="primary">
                    Nombre: <IonText className="w-full text-center" color="dark">Onell Dishmey | Ramy Campusano</IonText>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonLabel color="primary">
                    Correo: <IonText className="w-full text-center" color="dark">202010179@itla.edu.do | 202010153@itla.edu.do</IonText>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonLabel color="primary">
                    Telefono: <IonText className="w-full text-center" color="dark"> 9178017560 | 2564798125 </IonText>
                </IonLabel>
            </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Acercade;
