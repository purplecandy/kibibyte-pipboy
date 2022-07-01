import styles from "./style.css";

const Terminal = ({ onAgree }) => (
  <div className={styles.hhtml}>
    <div class={`${styles.bbody} ${styles.noisy}`}>
      <div class={styles.emblem}>
        <span class={styles["icon-information"]}></span>
      </div>
      <div class={styles["frame"]}>
        <div class={`${styles.piece} ${styles.output}`}>
          <div style={{ textAlign: "center" }}>
            <h2>Kibibyte Unified Interface</h2>
            <h2>COPYRIGHT 2075-2077 Kibibyte LLC</h2>
            <h4>-- Terminal 1 ---</h4>
          </div>
          <img
            style="position: absolute; opacity: 0;"
            alt=""
            src="http://cybersandbox.ca/adventure/termina.JPG"
            width="1"
            height="1"
          />
          <p>
            this webdomain is protected and contains sensitive information.
            access to this data is restricted to ind[!--NODE_CORRUPTED--]
          </p>
          <pre>
            [!--START NODE DIAGNOSTIC--] main: start ; Compute Nth Fibonacci
            number addi $1 1 ; $0=0, $1=1, base case addi $2 18 ; hold N, loop
            counter neg $2 ; shorthand for (xori $2 0x1ff) + 1 addi $2 1 ; setup
            $2 for loop count addi $3 bottom ; loop target is top; swapped with
            bottom addi $4 t1 ; entry point addi $5 exit ; exit address call:
            bez $4 $7 ; call fib routine rbez $5 $7 ; return from rcall addi $5
            -1 rexit: bez $4 $7 top: bltz $3 $2 ; paired loop branch, could be J
            t1: bez $4 $7 addi $7 1 add $0 $1 xor $0 $1 ; swap $0, $1 xor $1 $0
            xor $0 $1 addi $2 1 ; increment counter addi $3 -10 ; correct for
            exchange b1: bez $5 $2 ; exit condition bottom: bltz $3 $2 ; loop
            until done exit: bez $5 $2 ; exit point. top and bottom could ; have
            an unconditional jump ;;; Copy output and call the fib generator in
            reverse add $6 $1 ; Result to $6 addi $4 3 ; $4 points to call,
            adjust to rexit rcall: rbez $5 $2 ; call backwards; goto b1 bez $5
            $7 ; return from rcall ;; reclaim other space ;; we know $0=0, $1=1,
            $2=-17, $3=bottom, ;; $4=t1, $5=call+1, $6=fib(18), $7=0 ;; clear
            out those values addi $1 -1 addi $2 17 addi $3 -22 addi $4 -13 addi
            $5 -9 end: finish
          </pre>
          <p>
            <a onClick={onAgree}>{`> accept and enter`}</a>
          </p>
          <p>
            <a
              href="/interface"
              className={styles["no-decoration"]}
            >{`> goto blog`}</a>
          </p>
          <p>
            <a
              href="/interface"
              className={styles["no-decoration"]}
            >{`> contact`}</a>
          </p>
          <p>{`> //Null`}</p>
          <p>
            <a
              href="/interface"
              className={styles["no-decoration"]}
            >{`> github`}</a>
          </p>
        </div>
        <div
          class={`${styles.piece} ${styles.scanlines} ${styles.noclick}`}
        ></div>
        <div class={`${styles.piece} ${styles.glow} ${styles.noclick}`}></div>
      </div>
    </div>
  </div>
);

export default Terminal;
