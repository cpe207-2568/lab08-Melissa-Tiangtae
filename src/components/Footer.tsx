import {type FooterProps} from "../libs/types"
export function Footer(props: FooterProps){


    return (

        <footer className="text-secondary text-center p-2 bg-light mt-auto">
        {/* Copyright © 2026 chanadda thanyaratthanon 67062039 */}
        Copyright © {props.year} {props.fullName} {props.studentId}
      </footer>

    );
}