import clsx from "clsx"

export default function Die(props) {
    return(
        <button className={clsx('dice', { 'is-held': props.isHeld })} onClick={props.onClick}>
            {props.value}
        </button>
    )
}