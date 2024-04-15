import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useLocation } from 'react-router';


const Albergue: React.FC = () => {

    const location = useLocation<any>();
    const data = location?.state?.state;   
    const router = useIonRouter()

    console.log(data)

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Albergue</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Albergue</IonTitle>
            </IonToolbar>
            </IonHeader>

            <IonTitle className="mt-5 text-center font-bold" color="primary"> 
                { data?.edificio }
            </IonTitle>

            <IonList className="p-2 m-4">
                <IonItem>
                    <IonLabel color="primary">
                        Ciudad: <IonText color="dark">{data?.ciudad}</IonText>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel color="primary">
                        Capacidad: <IonText color="dark">{data?.capacidad}</IonText>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel color="primary">
                        Coordinador: <IonText color="dark">{data?.coordinador}</IonText>
                    </IonLabel>
                    <IonLabel color="primary">
                        Codigo: <IonText color="dark">{data?.codigo}</IonText>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel color="primary">
                        Latitud: <IonText color="dark">{data?.lat}</IonText>
                    </IonLabel>
                    <IonLabel color="primary">
                        Longitud: <IonText color="dark">{data?.lng}</IonText>
                    </IonLabel>
                </IonItem>

                <IonItem>
                    <IonLabel color="primary">
                        Telefono: <IonText color="dark">{data?.telefono}</IonText>
                    </IonLabel>
                </IonItem>

                <IonItem className="">
                    <IonButton onClick={() => router.goBack()} className="font-bold mx-auto">
                        <IonIcon icon={arrowBack} />
                        Volver
                    </IonButton>
                </IonItem>
            </IonList>

        </IonContent>
        </IonPage>
    );
};

export default Albergue;
