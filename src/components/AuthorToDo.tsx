interface AuthorToDoProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}

export const AuthorToDo: React.FC<AuthorToDoProps> = ({handleChange, text}) => {

    return (
            <input
                type="text"
                id="text"
                value={text}
                onChange={handleChange}
                placeholder="Add Author"
            />
    );
  }