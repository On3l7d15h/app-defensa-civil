import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router';

const Medida: React.FC = () => {

    const location = useLocation<any>();
    const data = location?.state?.state;   


    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Medida</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Medida</IonTitle>
            </IonToolbar>
            </IonHeader>

            <div className="w-5/6 rounded mx-auto mt-4 overflow-hidden">
                <IonImg src={data?.foto} />
            </div>

            <IonTitle className="mt-5 text-center font-bold" color="primary"> 
            { data?.titulo }
            </IonTitle>

            <div className="flex flex-col text-justify">
                <IonText className="my-4 mx-5">
                    { data?.descripcion }
                </IonText>
            </div>

        </IonContent>
        </IonPage>
    );
};

export default Medida;
