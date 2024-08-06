import { ReactElement } from "react";

interface AuthorToDoProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}

export function AuthorToDo(props: AuthorToDoProps): ReactElement<AuthorToDoProps> {

    return (
            <input
                type="text"
                id="text"
                value={props.text}
                onChange={props.handleChange}
                placeholder="Add Author"
            />
    );
  }