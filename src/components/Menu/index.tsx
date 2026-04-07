import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon} from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react';
type AvaliableThemes = 'dark' | 'light';

export function Menu(){
    //aqui farei meu hook interação com funções aqui
    const[theme, setTheme]=useState<AvaliableThemes>(() => {
    const storageTheme =
    (localStorage.getItem("theme") as AvaliableThemes || "dark");
    return storageTheme;
});

useEffect(()=>{
  document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
},[theme]);

const nextThemeIcon = {
  dark: <SunIcon/>,
  light: <MoonIcon/>
}

    function handleThemeChange(
    event:React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ){
        event.preventDefault();
        setTheme(prevTheme =>{
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
}
  return (
    <nav className = {styles.menu}>
      <a className={styles.menuLink} href="#"
      aria-label="Ir para a home"
      title='Ir para a home'
      ><HouseIcon/></a>

      <a className={styles.menuLink} href="#"
      aria-label="Histórico"
      title='Histórico'><HistoryIcon/></a>

      <a className={styles.menuLink} href="#"
      aria-label="Configurações"
      title='Configurações'><SettingsIcon/></a>

      <a className={styles.menuLink} href="#"
      aria-label="Mudar Tema"
      title='Mudar Tema'
      onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}