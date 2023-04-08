import Footer from '../../Footer'
import Header from '../../Header'
 
function HeaderOnlyLayout({children}){

    {console.log('render headerOnly layout')}
    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
            <Footer/>
        </div>
    )
}
export default HeaderOnlyLayout