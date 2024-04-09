import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookOutline, bookSharp, bookmarkOutline, buildOutline, buildSharp, heartOutline, heartSharp, homeOutline, homeSharp, mailOutline, mailSharp, mapOutline, mapSharp, paperPlaneOutline, paperPlaneSharp, personAddOutline, personAddSharp, personOutline, personSharp, trashOutline, trashSharp, videocamOutline, videocamSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Historia',
    url: '/Historia',
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
  {
    title: 'Servicios',
    url: '/Servicios',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Noticias',
    url: '/Noticias',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Videos',
    url: '/Videos',
    iosIcon: videocamOutline,
    mdIcon: videocamSharp
  },
  {
    title: 'Albergues',
    url: '/Albergues',
    iosIcon: buildOutline,
    mdIcon: buildSharp
  },
  {
    title: 'Mapa de Albergues',
    url: '/Mapa',
    iosIcon: mapOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Medidas Preventivas',
    url: '/Medidas',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Miembros',
    url: '/Miembros',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Quiero ser Voluntario',
    url: '/Voluntario',
    iosIcon: personAddOutline,
    mdIcon: personAddSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonImg 
            src="https://imgs.search.brave.com/QYNnpwUYe01Pbj_BlAtpS_Lfr7pa71uO8Guar_EgtJY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZWZl/bnNhY2l2aWwuZ29i/LmRvL2ltYWdlcy9M/b2clMjBEQyUyME51/ZXZhJTIwdmVyc2lv/JUNDJTgxbjUtMDEu/cG5n"
          />
          <IonListHeader>Bienvenido</IonListHeader>
          <IonNote>Defensa Civil RD</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
