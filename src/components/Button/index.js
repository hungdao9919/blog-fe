import { Link } from "react-router-dom";
import styles from './Button.module.scss'

function Button({
        children,
        primary = false,
        secondary = false,
        onClick, 
        href,
        to,
        underline=false,
        link=false, 
        outline = false,
        rounded = false, 
        small = false,
        large=false
    }){
    let props ={}
    let Component = 'button';
    if(to){
        props.to = to
        Component = Link 
    }
    if(href){
        Component = 'a'
        props.href = href
    }
    if(onClick){
        props.onClick=onClick
    }
    
    const classes = 
    `
    ${styles.button} 
    ${primary? styles.primary:""} 
    ${secondary? styles.secondary:""} 
    ${underline ? styles.underline:""} 
    ${link? styles.link:""} 
    ${outline? styles.outline:""} 
    ${rounded? styles.rounded:""} 
    ${small? styles.small:""} 
    ${large? styles.large:""}
    `
    return <Component 
    className ={ classes} {...props}
    >
        {children}
    </Component>
}
export default Button;