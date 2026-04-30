import clsx from "clsx"

export default function Die(props) {
    const isDisabled = props.isHeld
    return(
        <button 
            className={clsx('dice', { 'is-held': props.isHeld })} 
            onClick={props.onClick}
            disabled={isDisabled}
        >
            {props.value}
        </button>
    )
}