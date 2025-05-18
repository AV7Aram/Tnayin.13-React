import { useFormik } from 'formik';
import style from './Search.module.css';

export function Search() {
    const formik = useFormik({
        initialValues: {
            searchTerm: '', 
        },
        onSubmit: (values) => {
            console.log(values.searchTerm);
        },
    });

    return (
        <div className={style.headerSearch}>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="search"
                    name="searchTerm"
                    placeholder="Որոնում"
                    value={formik.values.searchTerm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <i className={`bi bi-search ${style['bi-search']}`}></i>
            </form>
        </div>
    );
}
