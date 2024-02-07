import { Btn } from '.';
import { usePage } from '../context/pageContext';

interface ButtonsProps {
  actionLabelNextLabel?: string;
  disabled?: boolean;
  handleNextPage: () => void;
}

const Buttons = ({
  actionLabelNextLabel = 'Next Page',
  disabled = false,
  handleNextPage,
}: ButtonsProps) => {
  const { currentPage, pagesNumber, prevPage } = usePage();

  return (
    <>
      {currentPage !== pagesNumber && (
        <div className="page__buttons">
          {currentPage !== 0 && (
            <div className="page__buttons-left">
              <Btn actionLabel="Go Back" outline onClick={prevPage} />
            </div>
          )}
          <div className="page__buttons-right">
            <Btn
              actionLabel={actionLabelNextLabel}
              disabled={disabled}
              onClick={handleNextPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Buttons;
