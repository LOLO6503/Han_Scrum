import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import '../css/ConfirmDialog.css';

export default function ConfirmDialog({ confirmDialog, setConfirmDialog }) {
    return (
        <Dialog open={confirmDialog.isOpen} classes={{ paper: 'dialog' }}>
            <DialogTitle className="dialogTitle">
                <Box className="titleIcon" style={{ color: confirmDialog.iconColor }}>
                    {confirmDialog.icon}
                </Box>
            </DialogTitle>
            <DialogContent className="dialogContent">
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subtitle}
                </Typography>
            </DialogContent>
            <DialogActions className="dialogAction">
                <Button
                    variant="outlined"
                    color={confirmDialog.buttonColor}
                    onClick={() => setConfirmDialog(prev => ({
                        ...prev,
                        isOpen: false
                    }))} 
                >
                    No
                </Button>
                <Button
                    variant="contained"
                    color={confirmDialog.buttonColor}
                    onClick={() => {
                        confirmDialog.onConfirm(); 
                        setConfirmDialog(prev => ({
                            ...prev,
                            isOpen: false
                        }))
                    }}
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}